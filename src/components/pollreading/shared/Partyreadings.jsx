import { LoadingOverlay } from '@mantine/core'
import React, { useEffect, useState } from 'react'

function Partyreadings({ partyname, totalData }) {

    const [partylead, setpPartylead] = useState(null)
    const [partyOwn, setPartyOwn] = useState(null)

    useEffect(() => {
        if (totalData) {
            if (totalData[partyname]) {
                if (totalData[partyname].partylead) {
                    setpPartylead(totalData[partyname].partylead)
                } else {
                    setpPartylead(null)
                }
            }
            if (totalData[partyname]) {
                if (totalData[partyname].partyOwn) {
                    setPartyOwn(totalData[partyname].partyOwn)
                } else {
                    setPartyOwn(null)
                }
            }
        }
    }, [totalData, partyname])

    return (
        <div className="row party">
            <div className="col-4 col-md-4 text-center">
                <span className="text-white font-weight-bold">{partyname}</span>
            </div>
            <div className="col-4 col-md-4 text-center">
                {
                    partylead ?
                        <span className="text-white font-weight-bold">{partylead}</span>
                        :
                        <span className="text-white font-weight-bold">--</span>
                }
            </div>
            <div className="col-4 col-md-4 text-center">
                {
                    partyOwn ?
                        <span className=" font-weight-bold " style={{ color: "#12f212" }}>
                            {partyOwn}
                        </span>
                        :
                        <span className=" font-weight-bold " style={{ color: "#12f212" }}>--</span>
                }
            </div>
        </div>
    )
}   

export default Partyreadings