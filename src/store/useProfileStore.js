import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    useProfile:null,
    setUserProfile:(userProfile) => set({userProfile}),
    addpost:(post) => set(state => ({
        userProfile:{...state.userProfile,post:[post.id,...state.userProfile.posts]}
    })),
    deletePost: (postId) =>
		set((state) => ({
			userProfile: {
				...state.userProfile,
				posts: state.userProfile.posts.filter((id) => id !== postId),
			},
		})),
}));

export default useUserProfileStore;