import { namespaced } from 'overmind/config'
import {
  createStateHook,
  createActionsHook,
  createEffectsHook
} from 'overmind-react'
import * as comments from './comments'
import * as performance from './performance'

export const useAppState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()

export const config = namespaced({
  comments,
  performance
})
