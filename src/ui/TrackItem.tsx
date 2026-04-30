import type {TrackListItemResource} from "../dal/api.ts";
import styles from "./TrackList.module.css";
import clsx from "clsx";

type Props = {
    isSelected: boolean;
    onSelect: (trackId: string) => void;
    track: TrackListItemResource;
};

export function TrackItem({ onSelect, track, isSelected }: Props) {
    const handleClick = () => onSelect(track.id);

    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    });

    return (
        <li className={className}>
            <div onClick={handleClick}>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls />
        </li>
    );
}