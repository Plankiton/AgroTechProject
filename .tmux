#!/bin/bash
tmux new -d -s agro 'node backend/src/server.js'
tmux split-window -v 'nvim backend/database.js'
tmux a -t agro