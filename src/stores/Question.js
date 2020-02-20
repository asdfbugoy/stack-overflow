import { types } from 'mobx-state-tree';

const Owner = types.model({
    badge_counts: types.optional(types.model({
        bronze: 0,
        silver: 0,
        gold: 0
    }),{}),
    reputation: 0,
    user_id: 0,
    user_type: '',
    profile_image: '',
    display_name: '',
    link: ''
});

export default types.model({
    question_id: types.identifierNumber,
    title: types.optional(types.string, ''),
    tags: types.frozen(),
    body: types.optional(types.string, ''),
    score: types.optional(types.number, 0),
    view_count: types.optional(types.number, 0),
    answer_count: types.optional(types.number, 0),
    owner: types.maybe(Owner),
}).views(() => ({

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