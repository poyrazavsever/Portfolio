import {useState, useEffect} from "react" 

export const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        audio.volume = .1
        playing ? audio.play() : audio.pause();
    }
    );

    return [playing, toggle];
};
