export interface UseAxiosProps<T, E = unknown> {
  data: T | null;
  loading: boolean;
  error: E | null;
  triggerFetch: () => void; 
}