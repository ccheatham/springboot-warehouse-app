package com.ched.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<com.ched.inventory.model.InventoryItem, Long> {
    com.ched.inventory.model.InventoryItem findByItemCode(String itemCode);
}
