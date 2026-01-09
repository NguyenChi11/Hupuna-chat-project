FROM node:20-bookworm-slim AS deps
WORKDIR /app

ENV HUSKY=0

COPY package.json package-lock.json ./
RUN npm ci
RUN set -eu; \
    LIGHTNINGCSS_VERSION="$(node -p "require(require('path').join(require('path').dirname(require.resolve('lightningcss')), '..', 'package.json')).version")"; \
    OXIDE_VERSION="$(node -p "require(require('path').join(require('path').dirname(require.resolve('@tailwindcss/oxide')), 'package.json')).version")"; \
    npm install --no-save "lightningcss-linux-x64-gnu@${LIGHTNINGCSS_VERSION}" "@tailwindcss/oxide-linux-x64-gnu@${OXIDE_VERSION}"


FROM node:20-bookworm-slim AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HUSKY=0

COPY package.json package-lock.json ./
RUN npm install --omit=dev --ignore-scripts && npm cache clean --force

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000
ENV PORT=3000

CMD ["npm", "run", "start"]
