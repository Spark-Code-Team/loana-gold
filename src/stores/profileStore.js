import { create } from 'zustand'

export const UserProfile = create((set) => ({
    data: {
        user: {
            id: null,
            phone_number: null,
            sheba: null,
            national_code: null,
            is_active: null,
            email: null,
            first_name: null,
            last_name: null,
            role: null,
            is_2fa: null
        },
        profile_img: null,
    },
    setProfile: (data) => {
        set(() => ({
            data: {
                user:
                    {...data.user}
                ,
                profile_img: data.profile_img,
            }
        }))
    },
    setProfileToNull: () => {
        set(() => ({
            data: {
                user: {
                    id: null,
                    phone_number: null,
                    sheba: null,
                    national_code: null,
                    is_active: null,
                    email: null,
                    first_name: null,
                    last_name: null,
                    role: null,
                    is_2fa: null
                },
                profile_img: null,
            },
        }))
    }
}))
