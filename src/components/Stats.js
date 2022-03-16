import React from 'react'

const Stats = (props) => {
    const totalPlayers = props.players.length
    const totalPoints = props.players.reduce( (total, player)=> total + player.score, 0 )
    return(
        <table>
            <tbody>
                <tr>
                    <td>Total Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Score:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats