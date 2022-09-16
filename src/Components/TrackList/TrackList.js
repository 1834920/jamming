import React from "react";
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component {
    removeTrack() {
        
    }

    render() {
        return (
        <div className="TrackList">
                {
                this.props.tracks.map(track => {
                    return <Track track={track} 
                    key={track.id}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove} 
                    isRemoval={this.props.isRemoval}  />
                    
                })
                }
            </div>
        )
    }
}

//For now, you will hard code three tracks. In a later assessment, we will replace the hard-coded values with tracks from Spotify. (Step 24)