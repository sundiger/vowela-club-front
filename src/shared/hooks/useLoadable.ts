import { useState, useCallback } from "react";

/**
 * Оборачивает асинхронный метод в try/finally и возвращает индикатор выполнения
 */
export function useLoadable<T, P = any>(callback: (params: T) => Promise<P>): [boolean, (params: T) => Promise<P>] {
  const [loading, setLoading] = useState(false);

  const requestMethod = useCallback(async (params: T) => {
    try {
      setLoading(true);

      return await callback(params);
    } finally {
      setLoading(false);
    }
  }, []);

  return [loading, requestMethod];
}
