namespace SpriteKind {
    export const Npc1 = SpriteKind.create()
    export const Npc2 = SpriteKind.create()
    export const Npc3 = SpriteKind.create()
    export const Npc4 = SpriteKind.create()
}
function Levels () {
    if (Level == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    }
    if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    Level += 1
    Levels()
})
let Level = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Custom background`)
mySprite = sprites.create(assets.image`PLAYER`, SpriteKind.Player)
mySprite.ay = 150
Level = 1
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 90, 0)
Level = 1
Levels()
