export function formatPhone(value: string): { formatted: string; raw: string } {
  let raw = value.replace(/\D/g, '');
  if (raw.length > 10) raw = raw.slice(0, 10);
  
  let formatted = '';
  if (raw.length > 6) formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)} ${raw.slice(6)}`;
  else if (raw.length > 3) formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
  else if (raw.length > 0) formatted = `(${raw}`;
  
  return { formatted, raw };
}