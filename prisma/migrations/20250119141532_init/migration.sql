-- AlterTable
ALTER TABLE `reviews` MODIFY `content` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `Pictures` (
    `id` VARCHAR(191) NOT NULL,
    `url` LONGTEXT NOT NULL,
    `service_name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
