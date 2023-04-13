namespace SpriteKind {
    export const Ground = SpriteKind.create()
}
function game_1Enemy () {
    scene.setBackgroundColor(4)
    tiles.setCurrentTilemap(tilemap`層級1`)
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..fffffffff....
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite2.setPosition(120, 102)
    mySprite2.ax = -100
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite3.setPosition(950, 25)
    mySprite3.ax = -100
    mySprite3.setFlag(SpriteFlag.BounceOnWall, true)
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.floorLightMoss)) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(12, 4), sprites.dungeon.floorLightMoss)) {
            tiles.setTileAt(tiles.getTileLocation(12, 4), assets.tile`transparency16`)
            tiles.setWallAt(tiles.getTileLocation(12, 4), false)
            info.changeScoreBy(1)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖2`, function (sprite, location) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(7, 0), assets.tile`我的貼圖2`)) {
        tiles.setTileAt(tiles.getTileLocation(7, 0), assets.tile`transparency16`)
        info.changeLifeBy(1)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(13, 6), assets.tile`我的貼圖2`)) {
        tiles.setTileAt(tiles.getTileLocation(13, 6), assets.tile`transparency16`)
        info.changeLifeBy(1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 103) {
        mySprite.vy = -170
    } else if (mySprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorDark0)) {
        mySprite.vy = -170
    } else if (mySprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLightMoss)) {
        mySprite.vy = -170
    } else if (mySprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight2)) {
        mySprite.vy = -260
    }
})
function gmaePlayer () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    info.setLife(100)
    info.setScore(0)
}
function game_2Enemy () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖3`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (info.score() == 4) {
            game.splash("666")
            game.gameOver(true)
        } else {
            game.splash("你是垃圾吧")
            game.gameOver(true)
        }
    }
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
function game_2 () {
    mySprite2.setPosition(96, 33)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 2), assets.tile`我的貼圖0`)) {
        tiles.setTileAt(tiles.getTileLocation(2, 2), assets.tile`transparency16`)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(13, 2), assets.tile`我的貼圖0`)) {
        tiles.setTileAt(tiles.getTileLocation(13, 2), assets.tile`transparency16`)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(63, 0), assets.tile`我的貼圖0`)) {
        tiles.setTileAt(tiles.getTileLocation(63, 0), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(62, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(63, 4), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(62, 4), false)
        tiles.setWallAt(tiles.getTileLocation(63, 4), false)
        info.changeScoreBy(1)
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
function game_1a () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖`, function (sprite, location) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(1, 0), assets.tile`我的貼圖`)) {
        tiles.setTileAt(tiles.getTileLocation(1, 0), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(22, 0), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(22, 1), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(22, 0), false)
        tiles.setWallAt(tiles.getTileLocation(22, 1), false)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(24, 0), assets.tile`我的貼圖`)) {
        tiles.setTileAt(tiles.getTileLocation(24, 0), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(62, 0), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(62, 1), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(62, 0), false)
        tiles.setWallAt(tiles.getTileLocation(62, 1), false)
    }
})
function game_1 () {
    game_1a()
    game_1Enemy()
    gmaePlayer()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game_1()
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(20, 102)
tiles.setWallAt(tiles.getTileLocation(22, 0), true)
tiles.setWallAt(tiles.getTileLocation(22, 1), true)
tiles.setWallAt(tiles.getTileLocation(62, 0), true)
tiles.setWallAt(tiles.getTileLocation(62, 1), true)
tiles.setWallAt(tiles.getTileLocation(63, 2), true)
tiles.setWallAt(tiles.getTileLocation(62, 4), true)
tiles.setWallAt(tiles.getTileLocation(63, 4), true)
game.onUpdate(function () {
    if (mySprite.y <= 103) {
        mySprite.ay = 400
    } else {
        mySprite.y = 103
    }
})
