import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

Tracker.autorun(function () {
    console.log('Player List:', Players.find().fetch())
})

/*setTimeout(function () {
    console.log('Player List:', Players.find().fetch())
})*/

const players = [
    {
        _id: '1',
        name: 'Lauren',
        score: 99,
    },
    {
        _id: '2',
        name: 'Cory',
        score: -1,
    },
    {
        _id: '3',
        name: 'Andrew',
        score: -12,
    },

    {
        _id: '4',
        name: 'John',
        score: 12,
    },
]

const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return (
            <p key={player._id}>
                {player.name} has {player.score}{' '}
            </p>
        )
    })
}

Meteor.startup(function () {
    let jsx = <div>{renderPlayers(players)}</div>
    ReactDOM.render(jsx, document.getElementById('app'))
})
