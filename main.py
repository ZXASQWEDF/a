@namespace
class SpriteKind:
    Ground = SpriteKind.create()
def game_1Enemy():
    global mySprite2
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    mySprite2.ax = -100
    mySprite2.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)

def on_a_pressed():
    if mySprite.y == 103:
        mySprite.vy = -270
    else:
        index = 0
        while index < 0:
            mySprite.vy = 0
            index += 1
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def game_2Enemy():
    pass

def on_overlap_tile(sprite, location):
    if controller.B.is_pressed():
        if tiles.tile_at_location_equals(tiles.get_tile_location(3, 1), sprites.dungeon.chest_closed):
            tiles.set_tile_at(tiles.get_tile_location(3, 1), sprites.dungeon.chest_open)
            info.change_score_by(1)
        elif tiles.tile_at_location_equals(tiles.get_tile_location(13, 6), sprites.dungeon.chest_closed):
            tiles.set_tile_at(tiles.get_tile_location(13, 6), sprites.dungeon.chest_open)
            info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

def game_2():
    mySprite2.set_flag(SpriteFlag.AUTO_DESTROY, True)
def game_1no():
    tiles.set_wall_at(tiles.get_tile_location(1, 2), True)
    tiles.set_wall_at(tiles.get_tile_location(2, 2), True)
    tiles.set_wall_at(tiles.get_tile_location(3, 2), True)

def on_life_zero():
    game.game_over(False)
info.on_life_zero(on_life_zero)

def gmae_1Player():
    global mySprite
    mySprite = sprites.create(img("""
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
        """),
        SpriteKind.player)
    info.set_life(3)
    info.set_score(0)

def on_overlap_tile2(sprite2, location2):
    if controller.B.is_pressed():
        tiles.set_current_tilemap(tilemap("""
            層級5
        """))
        game_2()
        game_2Enemy()
        mySprite.set_position(5, 103)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile2)

def on_on_overlap(sprite3, otherSprite):
    info.change_life_by(-1)
    pause(500)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

mySprite2: Sprite = None
mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    層級1
"""))
gmae_1Player()
game_1Enemy()
game_1no()
controller.move_sprite(mySprite, 100, 0)
scene.camera_follow_sprite(mySprite)
mySprite.set_position(153, 102)

def on_on_update():
    if mySprite.y < 103:
        mySprite.ay = 400
    else:
        mySprite.y = 103
game.on_update(on_on_update)
