import { partsAtom } from '@/atoms/parts/index'
import { focusAtom } from 'jotai-optics'

export const hairAtom = focusAtom(partsAtom, (optic) => optic.prop('hair'))
