/*
  Warnings:

  - You are about to drop the `_PlaylistToSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PlaylistToSong";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PlaylistsOnSongs" (
    "playlist_id" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,

    PRIMARY KEY ("playlist_id", "song_id"),
    CONSTRAINT "PlaylistsOnSongs_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "Playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlaylistsOnSongs_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
