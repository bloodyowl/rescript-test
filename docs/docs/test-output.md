---
title: Test output 
sidebar_label: Test output
---

# Test output

<img width="1166" height="744" style={{maxWidth: "100%", height: "auto"}}  alt="Test output screenshot" src="https://user-images.githubusercontent.com/1688645/113517422-28ee7200-9580-11eb-9e84-4f9de3c75069.png" />

Tests output look like the following (it looks nicer with colors ✨):

```shell
1/11: Async
  PASS - No message
2/11: Equals
  PASS - No message
3/11: Custom comparator
  PASS - Char code should match
4/11: DeepEquals
  PASS - No message
  PASS - No message
5/11: Setup
  PASS - No message
6/11: Setup
  PASS - No message
  PASS - No message
7/11: Setup & teardown
  PASS - No message
8/11: Setup & teardown 2
  PASS - No message
  PASS - No message
9/11: Async setup & teardown
  PASS - No message
10/11: Async setup & teardown 2
  PASS - No message
  PASS - No message
11/11: Cutom operator Equals
  PASS - No message

# Ran 11 tests (15 assertions)
# 11 passed
# 0 failed
```

Test failures look like the following:

```shell
1/3: Async
  FAIL - No message
    ---
    operator: equal
    left:  1
    right: 2
    ...
2/3: Equals
  FAIL - No message
    ---
    operator: equal
    left:  1
    right: 2
    ...
3/3: DeepEquals
  FAIL - No message
    ---
    operator: equal
    left:  user
    right: user2
    ...
  FAIL - No message
    ---
    operator: deepEqual
    left:  { username: 'user', id: 'a' }
    right: { username: 'user2', id: 'a' }
    ...

# Ran 3 tests (4 assertions)
# 0 passed
# 3 failed
```
