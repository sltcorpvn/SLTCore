db.users.findOne({$and:[
                        {$or: [{"valid_to": null}, {"valid_to": {$gte: ""}}
                    ]
                },
                {"username": 'sltadmin'}
]})