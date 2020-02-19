import { types, flow, applySnapshot, getSnapshot } from 'mobx-state-tree';

export default types.model({
    title: types.optional(types.string, ''),
    tags: types.frozen(),
    body: types.optional(types.string, ''),
    body_markdown: types.optional(types.string, ''),
    score: types.optional(types.number, 0),
    view_count: types.optional(types.number, 0),
    answer_count: types.optional(types.number, 0),
    owner: types.frozen()
}).views(self => ({

})).actions(self => ({
    afterCreate() {

    }
}));