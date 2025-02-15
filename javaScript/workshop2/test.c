#include <stdio.h>
#define TABLE_SIZE 10

typedef struct HashNode
{
    int key;
    int value;
    struct HashNode *next;
} HashNode;

typedef struct HashTable
{
    HashNode *buckets[TABLE_SIZE];
} HashTable;

int hashFunction(int key)
{
    return key % TABLE_SIZE;
}

HashNode *createNode(int key, int value) {
    HashNode *newNode = (HashNode *)malloc(sizeof(HashNode));
    if (!newNode) {
        printf("Memory allocation failed!\n");
        exit(1);
    }
    newNode->key = key;
    newNode->value = value;
    newNode->next = NULL;
    return newNode;
}

void insert(HashTable *table, int key, int value)
{
    int index = hashFunction(key);
    HashNode *newNode = createNode(key, value);

    if (!table->buckets[index])
    {
        table->buckets[index] = newNode;
    }
    else
    {

        newNode->next = table->buckets[index];
        table->buckets[index] = newNode;
    }
}

int search(HashTable *table, int key)
{
    unsigned int index = hashFunction(key);
    HashNode *current = table->buckets[index];

    while (current)
    {
        if (current->key == key)
        {
            return current->value; // Key found
        }
        current = current->next;
    }
    return -1; // Key not found
}

void initializeTable(HashTable *table)
{
    for (int i = 0; i < TABLE_SIZE; i++)
    {
        table->buckets[i] = NULL;
    }
}

int main()
{

    HashTable table;
    initializeTable(&table);

    insert(&table, 10, 100);
    insert(&table, 20, 200);
    insert(&table, 30, 300);
    insert(&table, 40, 400);
    insert(&table, 50, 500);
    insert(&table, 15, 150);
    insert(&table, 25, 250);

    printf("\nSearching for key 20: %d\n", search(&table, 20));
    printf("Searching for key 15: %d\n", search(&table, 15));
    printf("Searching for key 99: %d\n", search(&table, 99));
    return 0;
}