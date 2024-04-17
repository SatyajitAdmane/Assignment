import React from 'react';

const MachineStatusVisualization = ({data} ) => {
    
    const timeThreshold = 2000; // Threshold for considering a timestamp missing (in milliseconds)

    const renderStrips = () => {
        const strips = [];

        for (let i = 0; i < data.length; i++) {
            const currentTimestamp = new Date(data[i].ts).getTime();
            const nextTimestamp = i < data.length - 1 ? new Date(data[i + 1].ts).getTime() : null;

            // Render vertical strip based on machine status
            strips.push(
                <div key={i} className="vertical-strip" style={{ backgroundColor: data[i].machine_status === 1 ? 'green' : 'yellow' }} />
            );

            // Check for missing timestamps and render red strip if gap exceeds threshold
            if (nextTimestamp && nextTimestamp - currentTimestamp > timeThreshold) {
                strips.push(
                    <div key={`${i}-missing`} className="vertical-strip" style={{ backgroundColor: 'red' }} />
                );
            }
        }

        return strips;
    };

    return (
        <div className="machine-status-visualization">
            <div className="horizontal-bar">
                {renderStrips()}
            </div>
        </div>
    );
};

export default MachineStatusVisualization;