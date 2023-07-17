/*
  Warnings:

  - You are about to drop the `PasswordChange` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PasswordChange" DROP CONSTRAINT "PasswordChange_user_id_fkey";

-- DropTable
DROP TABLE "PasswordChange";

-- CreateTable
CREATE TABLE "password_changes" (
    "id" STRING NOT NULL,
    "token" STRING NOT NULL,
    "old_password" STRING NOT NULL,
    "new_password" STRING,
    "is_reset_password" BOOL NOT NULL DEFAULT false,
    "expires_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "PasswordChangeStatus" NOT NULL DEFAULT 'not_executed',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" STRING NOT NULL,

    CONSTRAINT "password_changes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "password_changes" ADD CONSTRAINT "password_changes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
