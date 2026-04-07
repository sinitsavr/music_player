import {useState} from "react";

export function useTrackSelection() {
    const [trackId, setTrackId] = useState<Array | null>(null)
    return {
        trackId,
        setTrackId
    }
}