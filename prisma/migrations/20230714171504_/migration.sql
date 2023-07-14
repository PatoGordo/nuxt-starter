-- CreateEnum
CREATE TYPE "PasswordChangeStatus" AS ENUM ('executed', 'not_executed');

-- CreateTable
CREATE TABLE "PasswordChange" (
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

    CONSTRAINT "PasswordChange_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PasswordChange" ADD CONSTRAINT "PasswordChange_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
