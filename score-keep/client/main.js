import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s){' '}
            </p>
        )
    })
}

const handleSubmit = function (e) {
    let playerName = e.target.playerName.value
    let playerScore = e.target.playerScore.value
    e.preventDefault()

    if (playerName) {
        e.target.playerName.value = ''
        e.target.playerScore.value = ''

        Players.insert({ name: playerName, score: playerScore })
    }
}

Meteor.startup(function () {
    Tracker.autorun(() => {
        let players = Players.find().fetch()
        let jsx = (
            <div>
                {renderPlayers(players)}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="playerName"
                        placeholder="Player name"
                    />

                    <br />

                    <input
                        type="text"
                        name="playerScore"
                        placeholder="Player
                    score"
                    />

                    <br />

                    <button> Add Player </button>
                </form>
            </div>
        )
        ReactDOM.render(jsx, document.getElementById('app'))
    })
})
