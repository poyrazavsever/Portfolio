import {useState, useEffect} from "react" 

export const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        audio.volume = .1
        audio.play()
        playing ? audio.play() : audio.pause();
    }
    );

    return [playing, toggle];
};
