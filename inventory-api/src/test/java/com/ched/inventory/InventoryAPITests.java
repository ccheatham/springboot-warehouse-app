package com.ched.inventory;

import com.ched.inventory.repository.InventoryRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class InventoryAPITests {

	@Autowired
	private InventoryRepository inventoryRepository;

	@Test
	public void TestInventoryItemRetrievalTest() {
		com.ched.inventory.model.InventoryItem i = inventoryRepository.findByItemCode("NNT-500");
		assertEquals(i.getName(), "Needle Nose Tweezers");
	}

	@Test
	public void checkRecordCountTest() {
		List inventoryItems = inventoryRepository.findAll();
		assertEquals(inventoryItems.size(), 2);
	}
}
