package com.ched.inventory.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "inventory")
public class InventoryItem {

    @Id
    @GeneratedValue
    private Long id;
    private String itemNo;
    private String itemCode;
    private String description;
    private String name;
    private String amount;
}
