import { createAction } from 'redux-actions'
import store from './index'
import { getLogFilterResponseFromSettings } from './synthesizer'

export const changeLFORate = createAction('CHANGE_LFO_RATE')
export const changeLFOWaveform = createAction('CHANGE_LFO_WAVEFORM')
export const changeLFOSend = createAction('CHANGE_LFO_SEND')

export const changeNoiseAmount = createAction('CHANGE_NOISE_AMOUNT')

export const changeOscWaveform = createAction('CHANGE_OSC_WAVEFORM')
export const changeCents = createAction('CHANGE_CENTS')
export const changeSemitones = createAction('CHANGE_SEMITONES')
export const changeOscGain = createAction('CHANGE_OSC_GAIN')

export const changeAttack = createAction('CHANGE_ATTACK')
export const changeDecay = createAction('CHANGE_DECAY')
export const changeSustain = createAction('CHANGE_SUSTAIN')
export const changeRelease = createAction('CHANGE_RELEASE')


export const updateFilterResponse = createAction('UPDATE_FILTER_RESPONSE')
export const updateFilterTargetFreqs = createAction('UPDATE_FILTER_TARGET_FREQS')

const changeCutoff = createAction('CHANGE_CUTOFF')
const changeQ = createAction('CHANGE_Q')

export function updateFilterCutoff(cutoff) {
  store.dispatch(changeCutoff(cutoff))
  store.dispatch(updateFilterResponse(getLogFilterResponseFromSettings()))
}
export function updateFilterQ(Q) {
  store.dispatch(changeQ(Q))
  store.dispatch(updateFilterResponse(getLogFilterResponseFromSettings()))
}

export const updatePlayingKeys = createAction('UPDATE_PLAYING_KEYS')

export const changeAmpLevel = createAction('CHANGE_AMP_LEVEL')
