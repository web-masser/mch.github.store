import { ActionTree, Commit} from 'vuex'
import { Rooters } from '../types'
import { example } from './types'
import request from '@/lib/request'

export const actions = {
    async example(context: { commit: Commit }, params: ActionTree<example, Rooters>) {
        return request.service.get('/xx', { params: params })
    },
}
