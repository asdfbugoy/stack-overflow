import { types, flow, applySnapshot, getSnapshot } from 'mobx-state-tree';

export default types.model({
    question_id: types.identifierNumber,
    title: types.optional(types.string, ''),
    tags: types.frozen(),
    body: types.optional(types.string, ''),
    score: types.optional(types.number, 0),
    view_count: types.optional(types.number, 0),
    answer_count: types.optional(types.number, 0),
    owner: types.frozen()
}).views(self => ({

})).actions(self => ({
    afterCreate() {

    },
    scoreUp() {
        self.score = self.score + 1;
    },
    scoreDown() {
        self.score = self.score - 1;
    }
}));