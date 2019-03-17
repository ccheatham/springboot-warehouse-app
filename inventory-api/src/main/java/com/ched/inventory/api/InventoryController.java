package com.ched.inventory.api;

import com.ched.inventory.repository.InventoryRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@Api(value="/inventory & /items",description="Warehouse Inventory",produces ="application/json")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class InventoryController {

    private final Logger log = LoggerFactory.getLogger(InventoryController.class);
    private InventoryRepository inventoryRepository;

    public InventoryController(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    @ApiOperation(value="Get all inventory",response= com.ched.inventory.model.InventoryItem.class)
    @ApiResponses(value={
            @ApiResponse(code=200, message="Inventory Retrieved", response= com.ched.inventory.model.InventoryItem.class),
            @ApiResponse(code=500, message="Internal Server Error"),
            @ApiResponse(code=404, message="No inventory found")
    })
    @GetMapping("/inventory")
    Collection<com.ched.inventory.model.InventoryItem> getAllInventory() {
        log.info("Listing inventory");
        return inventoryRepository.findAll();
    }

    @GetMapping("/inventory/{id}")
    ResponseEntity<?> getInventoryItem(@PathVariable Long id) {
        Optional<com.ched.inventory.model.InventoryItem> inventory = inventoryRepository.findById(id);
        return inventory.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/inventory")
    Collection<com.ched.inventory.model.InventoryItem> createInventoryItem(@Valid @RequestBody com.ched.inventory.model.InventoryItem inventoryItem) throws URISyntaxException {
        log.info("Making a new inventory item: ", inventoryItem);
        inventoryRepository.save(inventoryItem);
        return inventoryRepository.findAll();
    }

    @PutMapping("/inventory")
    Collection<com.ched.inventory.model.InventoryItem> updateInventoryItem(@Valid @RequestBody com.ched.inventory.model.InventoryItem inventoryItem) {
        log.info("Updating inventory item", inventoryItem);
        inventoryRepository.save(inventoryItem);
        return inventoryRepository.findAll();
    }

    @DeleteMapping("/inventory/{id}")
    Collection<com.ched.inventory.model.InventoryItem> deleteInventoryItem(@PathVariable Long id) {
        log.info("Deleting inventory item with id of " + id);
        inventoryRepository.deleteById(id);
        return inventoryRepository.findAll();
    }
}
