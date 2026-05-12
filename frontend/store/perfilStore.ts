
import { create } from "zustand";
import { ImageSourcePropType } from "react-native";

type Avatar = { id: string; res: ImageSourcePropType; name: string };

const AVATARES: Avatar[] = [
    { id: '1', res: require("@assets/avatars/brekibedi.png"), name: 'Otavio' },
    { id: '2', res: require("@assets/avatars/afro.png"), name: 'Mariana' },
    { id: '3', res: require("@assets/avatars/dorock.png"), name: 'Ricardo' },
    { id: '4', res: require("@assets/avatars/habibi.png"), name: 'Carla' },
];

interface PerfilStore {
    AVATARES: Avatar[];
    avatarSelecionado: Avatar;
    setAvatarSelecionado: (avatar: Avatar) => void;
}

export const usePerfilStore = create<PerfilStore>((set) => ({ 
    AVATARES,
    avatarSelecionado: AVATARES[0],
    setAvatarSelecionado: (avatar) =>
        set({ avatarSelecionado: avatar }),
}));
