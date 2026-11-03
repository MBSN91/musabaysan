'use client'
import { useRowLabel } from '@payloadcms/ui'

// Orbit rows read as "Outer 20°: ATHLIQ, the day score" instead of "Tile 01".
export const TileLabel = () => {
  const { data, rowNumber } = useRowLabel<{ label?: string; ring?: string; angle?: number }>()
  const n = String((rowNumber ?? 0) + 1).padStart(2, '0')
  if (!data?.label) return <span>Tile {n}</span>
  return <span>{n} · {data.ring === 'inner' ? 'Inner' : 'Outer'} {data.angle ?? 0}° · {data.label}</span>
}
