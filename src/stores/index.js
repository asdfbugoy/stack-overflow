import React from 'react';
import { types, flow, applySnapshot, getSnapshot } from 'mobx-state-tree';
import Question from './Question';
import MockQuestions from 'mock-api/questions.json';

const Store = types.model({
    questions: types.array(Question, [])
}).views(self => ({

})).actions(self => ({
    afterCreate() {

    },
    fetchQuestionsAPI() {
        applySnapshot(self.questions, MockQuestions.items);
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