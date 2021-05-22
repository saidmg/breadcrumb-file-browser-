const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080

if (process.env.NODE_ENV === 'production') {
    // for serving REACT production-build content
    app.use(express.static('client/build'))
} else {
    // for serving all the normal html
    app.use(express.static('public'))
}

let root = {
    type: '&#34;dir&#34;',
    children: {
        home: {
            type: '&#34;dir&#34;',
            children: {
                myname: {
                    type: '&#34;dir&#34;',
                    children: {
                        '&#34;filea.txt&#34;': {
                            type: '&#34;file&#34;',
                        },
                        "fileb.txt": {
                            type: '&#34;file&#34;',
                        },
                        "projects": {
                            type: '&#34;dir&#34;',
                            children: {
                                mysupersecretproject: {
                                    type: '&#34;dir&#34;',
                                    children: {
                                        mysupersecretfile: {
                                            type: '&#34;file&#34;',
                                        },
                                    },
                                }
                            },
                        },
                    }
                },
            },
        }
    },
};

let nextPath
function getthatpath(clicked, path = root['children']) {
    for (let i = 0; i < Object.keys(path).length; i++) {
        if (Object.keys(path)[i] === clicked) {
            nextPath = Object.values(path)[i]
        }
        else (
            Object.values(path).forEach(el => {
                if (el.type === '&#34;dir&#34;') {
                    getthatpath(clicked, el.children)
                }
            })
        )
    }
}
app.get('/path/:path', async function (req, res) {
    let getPath = req.params.path
    console.log('getpath',getPath)
    if (getPath == 'root') {
        res.send(eval(root))
    }
    await getthatpath(getPath)
    console.log(nextPath)
    res.send(nextPath)
})

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});