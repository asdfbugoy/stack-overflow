import { types, getParent } from 'mobx-state-tree';

export default types.model({
    min: types.optional(types.number, 1),
    pageLength: types.optional(types.number, 5),
    page: types.optional(types.number, 1),
    limit: types.optional(types.number, 15)
}).views(self => ({
    // get page() {
    //     return getParent(self).params.page ? parseInt(getParent(self).params.page, 10) : 1;
    // },
    get max() {
        const max = parseInt(getParent(self).questions.length / self.limit, 10);
        return getParent(self).questions.length % self.limit > 0 ? max + 1 : max;
    },
    get diff() {
        return Math.floor(self.pageLength / 2);
    },
    get offset() {
        let offset = self.page - self.diff;
        if (offset < self.min) offset = self.min;
        if (self.page + self.diff >= self.max) offset = self.max - (self.diff * 2);
        if (self.max < self.pageLength) offset = self.min;
        return offset;
    },
    get pages() {
        return Array.from({ length: self.max > self.pageLength ? self.pageLength : self.max }).map((d, i) => i + self.offset);
    }
})).actions(self => ({
    getQuestions() {
        const start = (self.page - 1) * self.limit;
        const end = start + self.limit;
        return getParent(self).questions.filter((d, i) => i >= start && i < end);
    },
    setPage(page) {
        self.page = page;
    }
}));