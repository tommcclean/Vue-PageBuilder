const state = {
    isEditMode: false,
    pageProperties: ''
};
const getters = {
    isEditMode: state => state.isEditMode,
    getPageProperties: state => state.pageProperties,
};
const mutations = {
    toggleEditMode: (state) => {
        state.isEditMode = !state.isEditMode;
    },
    setPageProperties: (state, properties) => {
        state.pageProperties = properties;
    }
};
const actions = {
    setPageProperties: ({
        commit
    }, properties) => {
        commit('setPageProperties', properties);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};