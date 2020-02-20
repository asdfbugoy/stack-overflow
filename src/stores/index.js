import React from 'react';
import { types, applySnapshot } from 'mobx-state-tree';
import Question from './Question';
import MockQuestions from 'mock-api/questions.json';
import Pagination from './Pagination';

const Store = types.model({
    questions: types.array(Question, []),
    pagination: types.maybe(Pagination)
}).views(() => ({

})).actions(self => ({
    afterCreate() {
        self.pagination = Pagination.create();
    },
    fetchQuestionsAPI() {
        applySnapshot(self.questions, MockQuestions.items);
    },
    getQuestion(id) {
        return self.questions.find(d => d.question_id === parseInt(id), 10);
    },
    addQuestion(data) {
        self.questions.unshift(data);
    }
}));

/**
 * thinking of moving below code to custom hooks
 */

export const store = Store.create();

const StoreContext = React.createContext();

export const Provider = StoreContext.Provider;

export function useMst() {
    const store = React.useContext(StoreContext);
    if (store === null) throw new Error('Store cannot be null, please add a context provider');
    return store;
}