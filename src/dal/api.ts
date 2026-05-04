export type TrackDetailsResource = {
    id: string,
    attributes: {
        title: string,
        lyrics: string | null,
    },
}

type GetTrackDetailsOutput = {
 data: TrackDetailsResource
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined
    return {
        'api-key': apiKey
    }
}

export const getTracks = () => {
    return Promise.resolve({
        data: Array.from({ length: 20 }, (_, i) => ({
            id: String(i + 1),
            attributes: {
                title: `Mock Track ${i + 1}`,
                attachments: [
                    {
                        url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(i % 16) + 1}.mp3`
                    }
                ]
            }
        }))
    });
};
export  const getTrack = (trackId:string)=> {
    const promise: Promise<GetTrackDetailsOutput> =         fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise;
}

type AttachmentsDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentsDto>
}
export type TrackListItemResource = {
    id: string;
    attributes: TrackListItemOutputAttributes
}

// type GetTrackListOutput = {
//     data: Array<TrackListItemResource>
// }

// export const getTracks = () => {
//   const promise: Promise<GetTrackListOutput> =  fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
//         headers: prepareHeaders()
//     }).then(res => res.json())
//     return promise
// }