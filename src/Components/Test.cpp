#include <iostream>
using namespace std;

int binarySearchAlgorithm(int arr[], int n, int x)
{
    int leftIndex = 0;
    int rightIndex = n - 1;

    while (leftIndex <= rightIndex)
    {
        int midIndex = leftIndex + (rightIndex - leftIndex) / 2;

        if (arr[midIndex] == x)
            return midIndex;
        if (arr[midIndex] < x)
            leftIndex = midIndex + 1;

        else
            rightIndex = midIndex - 1;
    }
    return -1;
}

int main()
{
    int arr[] = {2, 3, 4, 10, 40, 50, 80, 100, 120};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << binarySearchAlgorithm(arr, n, 50);

    return 0;
}