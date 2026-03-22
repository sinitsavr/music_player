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

export  const getTrack = (trackId:string)=> {
    const promise: Promise<GetTrackDetailsOutput> =         fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            'api-key': '52fbe20e-f68a-45cb-919e-2ae311ceadfb'
        }
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

type GetTrackListOutput = {
    data: Array<TrackDetailsResource>
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> =  fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': '52fbe20e-f68a-45cb-919e-2ae311ceadfb'
        }
    }).then(res => res.json())
    return promise
}