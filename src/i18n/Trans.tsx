import {  Fragment } from 'react'
import { Text } from 'react-native'
import { useTranslation } from './useTranslation'

interface TransProps {
  tKey: string
  className?: string
}

interface Segment {
  type: 'text' | 'gold' | 'standard' | 'br'
  value: string
}

function parse(text: string): Segment[] {
  const segments: Segment[] = []
  const regex = /<br\s*\/?>|<\/br>|<gold>([^<]*)<\/gold>|<standard>([^<]*)<\/standard>/gi
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, match.index) })
    }

    if (match[0].toLowerCase().includes('<br')) {
      segments.push({ type: 'br', value: '' })
    } else if (match[1] !== undefined) {
      segments.push({ type: 'gold', value: match[1] })
    } else if (match[2] !== undefined) {
      segments.push({ type: 'standard', value: match[2] })
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) })
  }

  return segments
}

export default function Trans({ tKey, className }: TransProps) {
  const { t } = useTranslation()
  const raw = t(tKey)
  const segments = parse(raw)

  return (
    <Text className={className}>
      {segments.map((seg, i) => {
        if (seg.type === 'br') {
          return <Fragment key={i}>{'\n'}</Fragment>
        }
        if (seg.type === 'gold') {
          return (
            <Text key={i} className="text-gold">
              {seg.value}
            </Text>
          )
        }
        if (seg.type === 'standard') {
          return (
            <Text key={i} className="text-accent italic">
              {seg.value}
            </Text>
          )
        }
        return <Fragment key={i}>{seg.value}</Fragment>
      })}
    </Text>
  )
}
