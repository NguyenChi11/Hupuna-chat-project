'use client';

import { useMemo } from 'react';

export function useLiveKitSession() {
  const state = useMemo(() => ({ active: false }), []);
  return state;
}

