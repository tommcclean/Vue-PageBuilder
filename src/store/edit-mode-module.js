const state = {
    isEditMode: false,
};
const getters = {
    isEditMode: state => state.isEditMode,
}
const mutations = {
    toggleEditMode: (state) => {
        state.isEditMode = !state.isEditMode;
    }
}

export default {
    state,
    getters,
    mutations
  }