import { number, shape } from 'prop-types'

export const EnvelopeType = shape({
  attackTime: number.isRequired,
  decayTime: number.isRequired,
  sustainLevel: number.isRequired,
  releaseTime: number.isRequired,
  peakLevel: number.isRequired,
})

export const AmplifierType = shape({ level: number.isRequired })