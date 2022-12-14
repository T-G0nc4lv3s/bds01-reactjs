package com.thiagosantana.tscatalog.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.thiagosantana.tscatalog.entities.Category;
import com.thiagosantana.tscatalog.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	@Query(value = "SELECT DISTINCT obj FROM Product obj INNER JOIN obj.categories cats "
			+ "WHERE (COALESCE(:categories) IS NULL OR cats IN :categories ) AND "
			+ "(LOWER(obj.name) LIKE LOWER(CONCAT('%', :name, '%'))) ")
	Page<Product> find(List<Category> categories, String name, Pageable pageable);
	
	@Query(value = "SELECT obj FROM Product obj "
			+ "JOIN FETCH obj.categories "
			+ "WHERE obj IN :products ")
	List<Product> findProductsWithCategories(List<Product> products);
}
